<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DishStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'step_number',
        'img',
        'text',
        'dish_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function dish(): BelongsTo
    {
        return $this->belongsTo(Dish::class);
    }
}
