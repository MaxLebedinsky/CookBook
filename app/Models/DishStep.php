<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\DishStep
 *
 * @property int $id
 * @property int $step_number
 * @property string|null $img
 * @property string $text
 * @property int $dish_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Dish $dish
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep query()
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereDishId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereImg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereStepNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DishStep whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
