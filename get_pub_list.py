import csv

def convert_csv_to_html(csv_file):
    html_content = ""
    
    with open(csv_file, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            # Extract the filename for the image
            title_image = row['Title'].lower().replace(' ', '') + '.png'
            publication_title = row['Publication Title'] if row['Publication Title'] else 'ArXiv'

            # Create HTML structure
            html_item = f'''
                                <li>
                                    <div class="life-item">
                                        <div class="life-item-pub-img">
                                            <img src="img/{title_image}">
                                        </div>
                                        <div class="life-item-content">
                                            <b class="paper-title">{row['Title']}</b>
                                            <br>
                                            {row['Author']}
                                            <br>
                                            <i>{publication_title} {row['Publication Year']}</i>
                                            <br>
                                            <a href="{row['Url']}" target="_blank" class="button">
                                                <i class="fa fa-file"> PDF</i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
            '''
            html_content += html_item
    
    return html_content

# Example usage
csv_file_path = 'lib.csv'
html_output = convert_csv_to_html(csv_file_path)
print(html_output)