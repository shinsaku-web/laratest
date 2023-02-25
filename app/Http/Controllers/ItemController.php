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

    public function store(StoreItemRequest $request)
    {
        try {
            Item::create([
                "category_id" => 1,
                "name" => $request->name,
                "price" => $request->price,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

    public function edit($id)
    {
        try {
            $item = Item::with("category")->findOrFail($id);
            return response()->json($item);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    public function update(UpdateItemRequest $request, $id)
    {
        try {
            Item::findOrFail($id)->update([
                "category_id" => $request->category_id,
                "name" => $request->name,
                "price" => $request->price,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

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
