<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    use ApiResponder;

    public function login(Request $request)
    {
        try {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                $data = [
                    'token' => $request->user()->createToken('LaravelSanctumAuth')->plainTextToken,
                ];
                return $this->handleResponse($data);
            } else {
                return $this->handleError('Unauthorised.', ['error' => 'Unauthorised']);
            }
        } catch (\Exception $exception) {
            $message = $exception->getMessage();
            return $this->handleError($message);
        }
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'confirm_password' => 'required|same:password',
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            $success['token'] = $user->createToken('LaravelSanctumAuth')->plainTextToken;

            return $this->handleResponse($success);
        } catch (\Exception $exception) {
            $message = $exception->getMessage();
            return $this->handleError($message);
        }
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if (is_null($user)) {
            return $this->handleResponse([]);
        }
//        $request->user()->currentAccessToken()->delete();
        $user->tokens()->delete();
        return $this->handleResponse($user);
    }
}
