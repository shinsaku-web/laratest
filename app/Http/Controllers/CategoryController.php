<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        try {
            Category::create([
                "name" => $request->name,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

    public function edit($id)
    {
        try {
            $item = Category::findOrFail($id);
            return response()->json($item);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), $th->getCode());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            Category::findOrFail($id)->update([
                "name" => $request->name,
            ]);
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }

    public function destroy($id)
    {
        try {
            Category::findOrFail($id)->delete();
            return response()->json("OK");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 401);
        }
    }
}
