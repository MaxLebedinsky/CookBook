<?php
/**
 * Created by PhpStorm.
 * User: MegaVolt
 * Date: 08.08.2021
 * Time: 15:51
 */

namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image;

class ImageSave
{
    const IMAGE_DIR = 'images';
    const THUMB_DIR = 'thumbnails';

    // contain all saved files. need for delete saved files if fails
    private $_fileList = [];

    public function deleteImages() {
        foreach ($this->_fileList as $file) {
            if (\File::exists($file)) {
                \File::delete($file);
            }
        }
    }

    private function _addtoFileList($file) {
        $this->_fileList[] = $file;
    }

    public function makeUrl($name, $is_thumb = false) {
        return '/storage/' . ($is_thumb ? self::THUMB_DIR : self::IMAGE_DIR) . '/' . $name;
    }

    /**
     * @param UploadedFile $image
     * @return string|bool
     */
    public function saveImage($image)
    {
        $filePath = null;
        $thumbPath = null;
        try {
            $name = $image->hashName();
            $name = $this->_getUniqueFileName($name);

            $basePath = \Storage::disk('public')->path('');
            $filePath = $basePath . self::IMAGE_DIR . DIRECTORY_SEPARATOR . $name;
            $thumbPath = $basePath . self::THUMB_DIR . DIRECTORY_SEPARATOR . $name;

            // save fullimage
            $img = Image::make($image->path());
            $img->resize(1024, 1024, function ($const) {
                $const->aspectRatio();
            })->save($filePath);
            $this->_addtoFileList($filePath);

            // save thumbnail
            $img = Image::make($image->path());
            $img->resize(300, 300, function ($const) {
                $const->aspectRatio();
            })->save($thumbPath);
            $this->_addtoFileList($filePath);

            // check if images is exists
            if (\File::exists($filePath) && \File::exists($thumbPath)) {
                return $name;
            }
            throw new \Exception('');
        } catch (\Exception $e) {
            $this->deleteImages();
            return false;
        }
    }

    private function _getUniqueFileName($name)
    {
        $folder = \Storage::disk('public')->path(self::IMAGE_DIR);
        $name = $this->_getNewName($name);
        while (is_file($folder . DIRECTORY_SEPARATOR . $name)) {
            $name = $this->_getNewName($name);
        }
        return $name;
    }

    private function _getNewName($name)
    {
        $ext = pathinfo($name, PATHINFO_EXTENSION);
        $name = \Str::random(16) . ($ext ? "." . $ext : "");
        return \Str::lower($name);
    }
}
