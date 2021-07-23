<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Dish
 *
 * @property int $id
 * @property string $title
 * @property string $img
 * @property string $description
 * @property int $user_id
 * @property int $category_id
 * @property int|null $views
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Dish newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Dish newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Dish query()
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereImg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereViews($value)
 * @mixin \Eloquent
 */
class Dish extends Model
{
    use HasFactory;

    const PER_PAGE = 2;

    protected $fillable = [
        'title',
        'img',
        'description',
        'pubdate',
        'user_id',
        'category_id',
        'views',
        'created_at',
    ];

    protected $hidden = [
        'updated_at',
    ];

    /**
     * Relationship between dishes and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relationship between dishes and category
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return HasMany
     */
    public function ingredients(): HasMany
    {
        return $this->hasMany(Ingredient::class);
    }

    /**
     * @return HasMany
     */
    public function dishSteps(): HasMany
    {
        return $this->hasMany(DishStep::class);
    }
}
