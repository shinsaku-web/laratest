<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Item;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::with("category")->get();
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        try {
            Item::create([
                "name" => $request->name,
                "price" => $request->price,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

    /**
     * Display the specified resource.
     */
    // public function show(Item $item)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        try {
            $item = Item::with("category")->findOrFail($id);
            return response()->json($item);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, $id)
    {
        try {
            Item::findOrFail($id)->update([
                "name" => $request->name,
                "price" => $request->price,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            Item::findOrFail($id)->delete();
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }
}
