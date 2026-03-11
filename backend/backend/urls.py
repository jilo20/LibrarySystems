from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import StudentViewSet, BookViewSet, TransactionViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'books', BookViewSet)
router.register(r'transactions', TransactionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]