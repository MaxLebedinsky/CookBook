<?php

namespace App\Models;

use App\Http\Resources\FullDishResource;
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
 * @property string $big_img
 * @property string $small_img
 * @property float $rating
 * @property int $complexity
 * @property-read \App\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\DishStep[] $dishSteps
 * @property-read int|null $dish_steps_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Ingredient[] $ingredients
 * @property-read int|null $ingredients_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereBigImg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereComplexity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Dish whereSmallImg($value)
 */
class Dish extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'big_img',
        'small_img',
        'description',
        'user_id',
        'category_id',
        'views',
        'rating',
        'complexity',
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

    /**
     * @param array $searchParams
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function searchByParams($searchParams)
    {
        $query = Dish::query();
        if (@$searchParams['category_id']) {
            $query->whereCategoryId($searchParams['category_id']);
        }

        if (@$searchParams['user_id']) {
            $query->whereUserId($searchParams['user_id']);
        }

        if (@$searchParams['title']) {
            $query->where('title', 'like', '%' . $searchParams['title'] . '%');
        }

        if (!empty(@$searchParams['includes'])) {
            $values = array_filter($searchParams['includes'], function ($item) {
                return strlen($item) > 0;
            });
            if (count($values) > 0) {
                $query->whereHas('ingredients', function ($query) use ($values){
                    $value = current($values);
                    $query->Where('ingredients_name', 'like', "%{$value}%");
                    while($value = next($values)) {
                        $query->orWhere('ingredients_name', 'like', "%{$value}%");
                    }
                });
            }
        }

        if (!empty(@$searchParams['excludes'])) {
            $values = array_filter($searchParams['excludes'], function ($item) {
                return strlen($item) > 0;
            });
            if (count($values) > 0) {
                $query->whereDoesntHave('ingredients', function ($query) use ($values){
                    $value = current($values);
                    $query->Where('ingredients_name', 'like', "%{$value}%");
                    while($value = next($values)) {
                        $query->orWhere('ingredients_name', 'like', "%{$value}%");
                    }
                });
            }
        }

        // process sorting
        if (@$searchParams['sort']) {
            $sortParts = explode(',', $searchParams['sort']);
            $sortParts = array_filter($sortParts, function ($item) {
                return strlen($item) > 0;
            });

            foreach ($sortParts as $sortField) {
                if (\Str::startsWith($sortField, '-')) {
                    $query->orderByDesc(\Str::substr($sortField, 1));
                } else {
                    $query->orderBy($sortField);
                }
            }
        }

        return $query->paginate(20);
    }
}
