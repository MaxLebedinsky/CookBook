<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Measure
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Ingredient[] $ingredients
 * @property-read int|null $ingredients_count
 * @method static \Illuminate\Database\Eloquent\Builder|Measure newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Measure newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Measure query()
 * @method static \Illuminate\Database\Eloquent\Builder|Measure whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Measure whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Measure whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Measure whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Measure extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function ingredients(): HasMany
    {
        return $this->hasMany(Ingredient::class);
    }
}
