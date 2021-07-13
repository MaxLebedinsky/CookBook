<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\Article
 *
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string $content
 * @property bool $published
 * @property \Illuminate\Support\Carbon|null $published_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\ArticleFactory factory(...$parameters)
 * @method static Builder|Article mine(int $user_id)
 * @method static Builder|Article newModelQuery()
 * @method static Builder|Article newQuery()
 * @method static \Illuminate\Database\Query\Builder|Article onlyTrashed()
 * @method static Builder|Article published()
 * @method static Builder|Article query()
 * @method static Builder|Article whereContent($value)
 * @method static Builder|Article whereCreatedAt($value)
 * @method static Builder|Article whereDeletedAt($value)
 * @method static Builder|Article whereDescription($value)
 * @method static Builder|Article whereId($value)
 * @method static Builder|Article wherePublished($value)
 * @method static Builder|Article wherePublishedAt($value)
 * @method static Builder|Article whereSlug($value)
 * @method static Builder|Article whereTitle($value)
 * @method static Builder|Article whereUpdatedAt($value)
 * @method static Builder|Article whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|Article withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Article withoutTrashed()
 * @mixin \Eloquent
 */
class Article extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'articles';

    protected $fillable = ['title', 'slug', 'description', 'content', 'published', 'published_at'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'published' => 'boolean',
    ];

    protected static function newFactory(): ArticleFactory
    {
        return ArticleFactory::new();
    }

    /**
     * Load all for admin and paginate
     *
     * @return Paginator
     */
    public static function loadAll(): Paginator
    {
        return static::latest()
            ->paginate();
    }

    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllMine(int $user_id): Paginator
    {
        return static::latest()
            ->mine($user_id)
            ->paginate();
    }

    /**
     * load all published with pagination
     *
     * @return Paginator
     */
    public static function loadAllPublished(): Paginator
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
        ])
            ->latest()
            ->published()
            ->paginate();
    }

    /**
     * load one published
     *
     * @param string $slug
     *
     * @return Article
     */
    public static function loadPublished(string $slug): Article
    {
        return static::with([
            'user' => function (BelongsTo $query) {
                $query->select('id', 'name');
            },
        ])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();
    }

    /**
     * Add query scope to get only published articles
     *
     * @param Builder $query
     *
     * @return Builder
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where([
            'published' => true,
        ]);
    }

    /**
     * Load only articles related with the user id
     *
     * @param Builder $query
     * @param int $user_id
     *
     * @return Builder
     */
    public function scopeMine(Builder $query, int $user_id): Builder
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * Relationship between articles and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
