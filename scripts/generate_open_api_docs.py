if __name__ == "__main__":
    import os

    root_dir = os.path.abspath(os.path.join(os.getcwd(), os.pardir))
    app_dir = os.path.join(root_dir, "django_app")
    file = os.path.join(root_dir, "openapi", "schema.yml")
    manage = os.path.join(app_dir, "manage.py")
    if os.path.exists(file):
        os.remove(file)
    # generate the schema.yml file
    os.system(f"python {manage} spectacular --file {file}")

    auto_gen_folder = os.path.join(app_dir, "react_app", "src", "api", "autogen2")
    os.system("python typescript_fetch.py " + auto_gen_folder + " " + file)
