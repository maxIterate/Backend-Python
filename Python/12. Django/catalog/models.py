from django.db import models
from django.urls import reverse

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=64, help_text="Pon el nombre del género")

    #representación informal de un objeto
    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=64, help_text='Ingresa el nombre del autor')

class Book(models.Model):
    title = models.CharField(max_length=32)
    # ForeignKey: relación
    # on_delete indica que si el autor se borra dentro de la clase libro, será por default NULL.
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=100, help_text="Pon aquí de que trata el libro")
    isbn = models.CharField('ISBN', max_length=13, help_text='El ISBN de 13 caracteres')
    genre = models.ManyToManyField(Genre)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('book-detail', args=[str(self.id)])
    
