<?php

namespace App\Traits;

trait ApiResponder
{
    public function handleResponse($result, $code = 200)
    {
        $res = [
            'data' => $result,
        ];
        return response()->json($res, $code);
    }

    public function handleError($error, $errorMsg = [], $code = 400)
    {
        $res = [
            'message' => $error,
        ];
        if (!empty($errorMsg)) {
            $res['data'] = $errorMsg;
        }
        return response()->json($res, $code);
    }
}
