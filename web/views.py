from django.shortcuts import redirect, render
from web.models import Enquiry

# Create your views here.
def index(request):
    return render(request, "web/index.html")


def store_enquiry(request):
    enquiry = Enquiry(
        enquiry_type = request.POST.get('enquiryType', 'individual'),
        first_name = request.POST['firstname'],
        last_name = request.POST['lastname'],
        company_name = request.POST['companyname'],
        number_of_attendees = request.POST['noofattendee'],
        suitable_date = request.POST['suitabledate'],
        address = request.POST['address'],
        postcode = request.POST['postalcode'],
        contact_number = request.POST['contactnumber'],
        contact_email = request.POST['email'],
        marketing_news = request.POST['update'] == 'on'
    )
    enquiry.save()
    return redirect("/")