from django.db import models

class Enquiry(models.Model):
    ENQUIRY_TYPES = [
        ('organization', 'Organization'),
        ('individual', 'Individual'),
    ]

    enquiry_type = models.CharField(max_length=20, choices=ENQUIRY_TYPES, default='individual')
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    company_name = models.CharField(max_length=200, blank=True, null=True)
    number_of_attendees = models.PositiveIntegerField(blank=True, null=True)
    suitable_date = models.DateField(blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    postcode = models.CharField(max_length=20, blank=True, null=True)
    contact_number = models.CharField(max_length=15)
    contact_email = models.EmailField()
    marketing_news = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.enquiry_type} - {self.first_name or 'N/A'}"
