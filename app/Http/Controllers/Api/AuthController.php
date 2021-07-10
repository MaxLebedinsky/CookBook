<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;


class AuthController extends Controller
{
    use ApiResponder;

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user();
            $success['token'] = $auth->createToken('LaravelSanctumAuth')->plainTextToken;
            $success['name'] = $auth->name;
            $success['is_admin'] = $auth->is_admin;

            return $this->handleResponse($success, 'User logged-in!');
        } else {
            return $this->handleError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }

    public function register(Request $request)
    {
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
        $success['name'] = $user->name;

        return $this->handleResponse($success, 'User successfully registered!');
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if (is_null($user)) {
            return $this->handleResponse([], 'User successfully logout!');
        }
//        $request->user()->currentAccessToken()->delete();
        $user->tokens()->delete();
        return $this->handleResponse($user, 'User successfully logout!');
    }
}
