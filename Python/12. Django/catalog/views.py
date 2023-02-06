from django.shortcuts import render
from .models import Book, Author, Genre

# Create your views here.
def index(request):
    num_books = Book.objects.all().count()
    num_authors = Author.objects.all().count()

    return render(
        request,
        'index.html',
        context={
            'num_books': num_books,
            'num_authors': num_authors
        }
    )