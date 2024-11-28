from this folder run

``
python manage.py migrate 
``

# API Clients auto-gen

Follow the instructions to install, prefer scoop for windows [openapi-generator](https://openapi-generator.tech/docs/installation/)

then use the following command to generate the client

```poweshell
openapi-generator-cli generate -i ./openapi/schema.yaml -g typescript-axios
```




## References

* [Django](https://www.djangoproject.com/)
* API Views [Django Rest Framework](https://www.django-rest-framework.org/)
* Authentication [dj-rest-auth](https://github.com/iMerica/dj-rest-auth)
* Open API 3 Docs  [drf-spectacular](https://github.com/tfranzel/drf-spectacular/)

# Features to maybe include

* [Django Polymorphic](https://github.com/jazzband/django-polymorphic)
