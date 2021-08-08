<?php
/**
 * Created by PhpStorm.
 * User: MegaVolt
 * Date: 08.08.2021
 * Time: 15:51
 */

namespace App\Helpers;

use Illuminate\Http\UploadedFile;

class ImageSave
{
    const IMAGE_DIR = 'images';
    const THUMB_DIR = 'thumbnails';

    public function listBySheetDetailId(SheetDetail $sheetDetail)
    {
//        return \View::make('detail_photo.index', [
//            'sheet_detail' => $sheetDetail,
//            'photos' => $photos,
//        ]);
    }

    public function store(\Request $request)
    {
        if ($request->hasfile('images')) {
            $images = $request->file('images');

            foreach ($images as $image) {
                $name = $this->_saveFiles($image);
                if (is_string($name)) {
                    $data = [
                        'name' => $name,
                        'path' => '/storage/' . self::IMAGE_DIR . '/' . $name,
                        'thumb' => '/storage/' . self::THUMB_DIR . '/' . $name,
                    ];

                    //
                } else {
                    return back()->withErrors('Foto not uploaded');
                }
            }
        }

        return back()->with('success', 'Images uploaded successfully');
    }

    /**
     * @param UploadedFile $image
     * @return string|bool
     */
    private function _saveFiles($image)
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

            // save thumbnail
            $img = Image::make($image->path());
            $img->resize(300, 300, function ($const) {
                $const->aspectRatio();
            })->save($thumbPath);

            // check if images is exists
            if (\File::exists($filePath) && \File::exists($thumbPath)) {
                return $name;
            }
            throw new \Exception('');
        } catch (\Exception $e) {
            if ($filePath && \File::exists($filePath)) \File::delete($filePath);
            if ($thumbPath && \File::exists($thumbPath)) \File::delete($thumbPath);
            return false;
        }
    }

    private function _getUniqueFileName($name)
    {
        $folder = storage_path('uploads');
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
