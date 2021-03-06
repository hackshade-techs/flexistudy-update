<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseReviewRating extends Model
{
    protected $fillable=['course_id', 'average_rating'];
    
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
