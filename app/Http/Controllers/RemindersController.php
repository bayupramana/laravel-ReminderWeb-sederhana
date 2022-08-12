<?php

namespace App\Http\Controllers;

use App\Http\Resources\RemindersCollection;
use App\Models\Reminders;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RemindersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reminders = new RemindersCollection(Reminders::paginate(8));
        return Inertia::render('Homepage',[
            'title'=>'REMIND.ME HOMEPAGE',
            'description'=>'Selamat datang di REMIND.ME silahkan lihat agenda anda',
            'reminders'=> $reminders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reminders  $reminders
     * @return \Illuminate\Http\Response
     */
    public function show(Reminders $reminders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reminders  $reminders
     * @return \Illuminate\Http\Response
     */
    public function edit(Reminders $reminders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reminders  $reminders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reminders $reminders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reminders  $reminders
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reminders $reminders)
    {
        //
    }
}
