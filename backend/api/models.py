from django.db import models

class Student(models.Model):
    studentId = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Book(models.Model):
    bookId = models.CharField(max_length=20, primary_key=True)
    bookTitle = models.CharField(max_length=200)
    bookGenre = models.CharField(max_length=100)

    def __str__(self):
        return self.bookTitle


class Transaction(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    date = models.DateField()
    isReturned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student.name} borrowed {self.book.bookTitle}"