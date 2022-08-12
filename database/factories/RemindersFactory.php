<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RemindersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama_kegiatan' => fake()->sentence(),
            'deskripsi_kegiatan' => fake()->paragraph(1, true),
            'tempat' => fake()->word(),
            'penyelenggara'=> fake()->title(),
            'waktu_kegiatan'=> fake()->dateTime()
        ];
    }
}
