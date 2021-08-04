<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use App\Models\Measure;

class MeasureController extends Controller
{
    use ApiResponder;

    public function index()
    {
        $measures = Measure::all();

        return  $this->handleResponse($measures);
    }
}
