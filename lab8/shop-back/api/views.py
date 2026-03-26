from django.http import JsonResponse
from .models import Product, Category

# 1. Список всех товаров
def product_list(request):
    products = Product.objects.all()
    products_json = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        } for p in products
    ]
    return JsonResponse(products_json, safe=False)

# 2. Один товар по ID
def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

# 3. Список всех категорий
def category_list(request):
    categories = Category.objects.all()
    categories_json = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(categories_json, safe=False)

# 4. Одна категория по ID
def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({"id": c.id, "name": c.name})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

# 5. Список товаров по категории
def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
        products = c.products.all() # related_name из нашей модели
        products_json = [{"id": p.id, "name": p.name} for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)