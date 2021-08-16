<?php
/**
 * Created by PhpStorm.
 * User: MegaVolt
 * Date: 08.08.2021
 * Time: 15:51
 */

namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImageSave
{
    const IMAGE_DIR = 'images';
    const THUMB_DIR = 'thumbnails';

    const SAVE_THUMB = 1;
    const SAVE_IMAGE = 2;

    // contain all saved files. need for delete saved files if fails
    private $_fileList = [];

    private $_baseDirectory = '';
    private $_baseUrl = '';

    /**
     * ImageSave constructor.
     * @param string $storageDiskName
     * @param string $storageBaseUrl
     */
    public function __construct($storageDiskName = 'public', $storageBaseUrl = '/storage/')
    {
        $this->_baseDirectory = Storage::disk($storageDiskName)->path('');
        $this->_baseUrl = $storageBaseUrl;

        $filePath = $this->_baseDirectory . self::IMAGE_DIR;
        $thumbPath = $this->_baseDirectory . self::THUMB_DIR;

        foreach ([$filePath, $thumbPath] as $path) {
            if (!File::isDirectory($path)) {
                File::makeDirectory($path);
            }
        }
    }

    public function deleteImages()
    {
        foreach ($this->_fileList as $file) {
            if (File::exists($file)) {
                File::delete($file);
            }
        }
    }

    private function _addtoFileList($file)
    {
        $this->_fileList[] = $file;
    }

    public function makeUrl($name, $is_thumb = false)
    {
        return '/storage/' . ($is_thumb ? self::THUMB_DIR : self::IMAGE_DIR) . '/' . $name;
    }

    /**
     * @param UploadedFile $image
     * @param int $whatSave
     * @return string|bool
     */
    public function saveImage($image, $whatSave = self::SAVE_THUMB | self::SAVE_IMAGE)
    {
        $filePath = null;
        $thumbPath = null;
        try {
            $name = $image->hashName();
            $name = $this->_getUniqueFileName($name);

            $filePath = $this->_baseDirectory . self::IMAGE_DIR . DIRECTORY_SEPARATOR . $name;
            $thumbPath = $this->_baseDirectory . self::THUMB_DIR . DIRECTORY_SEPARATOR . $name;

            if ($whatSave & self::SAVE_IMAGE) {
                // save fullimage
                $img = Image::make($image->path());
                $img->resize(1024, 1024, function ($const) {
                    $const->aspectRatio();
                })->save($filePath);
                if (!File::exists($filePath)) {
                    throw new \Exception('Image not saved');
                }
                $this->_addtoFileList($filePath);
            }

            if ($whatSave & self::SAVE_THUMB) {
                // save thumbnail
                $img = Image::make($image->path());
                $img->resize(300, 300, function ($const) {
                    $const->aspectRatio();
                })->save($thumbPath);
                if (!File::exists($thumbPath)) {
                    throw new \Exception('Thumbnail not saved');
                }
                $this->_addtoFileList($thumbPath);
            }

            return $name;
        } catch (\Exception $e) {
            $this->deleteImages();
            return false;
        }
    }

    private function _getUniqueFileName($name)
    {
        $folder = $this->_baseDirectory . DIRECTORY_SEPARATOR . self::THUMB_DIR;
        $name = $this->_getNewName($name);
        while (is_file($folder . DIRECTORY_SEPARATOR . $name)) {
            $name = $this->_getNewName($name);
        }
        return $name;
    }

    private function _getNewName($name)
    {
        $ext = pathinfo($name, PATHINFO_EXTENSION);
        $name = Str::random(16) . ($ext ? "." . $ext : "");
        return Str::lower($name);
    }
}
