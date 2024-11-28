generator = "typescript-redux-query"
additional_properties = "withInterfaces=true"
import sys, os

if __name__ == "__main__":
    output_folder = sys.argv[1]
    input_file = sys.argv[2]
    command = f"openapi-generator-cli generate -g {generator} -o {output_folder} -i {input_file} --additional-properties={additional_properties}"
    os.system(command)
