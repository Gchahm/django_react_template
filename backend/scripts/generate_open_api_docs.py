if __name__ == "__main__":
    import os

    backend_dir = os.path.abspath(os.path.join(os.getcwd(), os.pardir))
    yaml_file = os.path.join(backend_dir, "openapi", "schema.yml")
    # delete the existing schema.yml file
    file = "../openapi/schema.yml"
    if os.path.exists(file):
        os.remove(file)
    # generate the schema.yml file
    os.system(f"python ../app/manage.py spectacular --file {file}")

    # generate the typescript api client
    root_dir = os.path.abspath(os.path.join(backend_dir, os.pardir))
    auto_gen_folder = os.path.join(root_dir, "frontend", "src", "api", "autogen")
    os.system(f"openapi-generator-cli generate -i {yaml_file} -g typescript-axios -o {auto_gen_folder}")