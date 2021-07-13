<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'ingredients_name',
        'quantity',
        'measure',
        'dish_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    /**
     * Relationship between dishes and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function dish(): BelongsTo
    {
        return $this->belongsTo(dish::class);
    }
}
