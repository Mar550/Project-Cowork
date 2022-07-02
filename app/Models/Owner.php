<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $guarded = [];

    use HasFactory;

    public function coworkings()
    {
        return $this->hasMany(Coworking::class, 'coworking_id');
    }
}
