<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Traits\ApiResponder;

class UserController extends Controller
{
    use ApiResponder;

    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->validated());

        return $this->handleResponse($user, 201);
    }
}
