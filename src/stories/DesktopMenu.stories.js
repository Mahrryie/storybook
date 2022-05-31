import DesktopMenu from '../components/DesktopMenu';
import Img from '../assets/predictive-modeling-in-healthcare-related.jpg';
import About from '../assets/about-us-menu.jpg';
import Approach from '../assets/approach-menu.jpg';
import Awards from '../assets/awards-menu.jpg';
import Career from '../assets/career-menu.jpg';
import News from '../assets/news-menu.jpg';
import Partnership from '../assets/partnership-menu.jpg';
import Industries from '../assets/industries-menu.jpg';
import Automotive from '../assets/automotive-menu.jpg';
import Healthcare from '../assets/healthcare-menu.jpg';
import Finance from '../assets/finance-menu.jpg';
import HiTech from '../assets/hi-tech-menu.jpg';
import Telecom from '../assets/telecom-menu.jpg';
import Retail from '../assets/retail-menu.jpg';

export default {
    title: 'Menu/DesktopMenu',
    component: DesktopMenu,
    argTypes: {
        colorScheme: {
            type: 'String',
            description: 'NOT a prop! Used for visual purpose',
            control: {
                type: 'radio'
            },
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary']
        },
    }
}

const Template = (args) => <DesktopMenu {...args}/>;

export const Default = Template.bind({});
Default.args = {
    menuRaw: [
        {
            "title": "Digital enterprise",
            "id": "2dd85461-b174-4157-914b-c0deb8b5ba92",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/solutions/digital-enterprise"
            },
            "weight": -50,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Healthcare",
            "id": "681e01dd-0072-44d5-8a81-9e5b29ac350a",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/healthcare"
            },
            "weight": -50,
            "relationships": {
                "field_image": Healthcare
            }
        },
        {
            "title": "Services",
            "id": "48a00da0-366f-43a0-9d48-e23519ff9d5b",
            "parent": null,
            "link": {
                "uri": "/services"
            },
            "weight": -50,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "IT consulting",
            "id": "2d95b653-5458-4db8-ba89-beae31a487bc",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/it-consulting"
            },
            "weight": -50,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Finance",
            "id": "a7b1f720-902a-4f26-90de-d6d6c1c1abff",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/finance"
            },
            "weight": -49,
            "relationships": {
                "field_image": Finance
            }
        },
        {
            "title": "Digital commerce",
            "id": "3d993199-f1bb-4fce-8d39-2238058061ae",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/ecommerce"
            },
            "weight": -49,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Industries",
            "id": "62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "parent": null,
            "link": {
                "uri": "/industries"
            },
            "weight": -49,
            "relationships": {
                "field_image": Industries
            }
        },
        {
            "title": "Software engineering",
            "id": "7f554426-885e-4abc-8319-0155da94e53d",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/custom-software-development"
            },
            "weight": -49,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Retail",
            "id": "79de0a91-2aea-4224-a54b-9f7f600ab105",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/retail"
            },
            "weight": -48,
            "relationships": {
                "field_image": Retail
            }
        },
        {
            "title": "Case studies",
            "id": "cec7b2dd-d67a-4949-baec-6ea6c0611883",
            "parent": null,
            "link": {
                "uri": "/portfolio"
            },
            "weight": -48,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Product development",
            "id": "faa98e8b-ffd6-4ed8-ba88-05455895a785",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/software-product-development"
            },
            "weight": -48,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Machine learning",
            "id": "a8e7178f-8e1d-4a9d-a11a-87658afdb4ec",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/services/machine-learning"
            },
            "weight": -48,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Automotive",
            "id": "6320e235-2b51-4154-b221-7a8bf4b25623",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/automotive"
            },
            "weight": -47,
            "relationships": {
                "field_image": Automotive
            }
        },
        {
            "title": "Blog",
            "id": "ada226ff-1a0e-457a-862d-cfff0bac800a",
            "parent": null,
            "link": {
                "uri": "/blog"
            },
            "weight": -47,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Managed IT services",
            "id": "821b5fdc-68b4-4784-8636-4ced12fa47c2",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/managed-it"
            },
            "weight": -47,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Data management",
            "id": "51f80bd2-656e-4283-b568-93e154e013c6",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/services/data-management"
            },
            "weight": -47,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "RPA",
            "id": "9df28939-8a27-4672-940a-407184bcd529",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/services/rpa"
            },
            "weight": -46,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Telecommunications",
            "id": "5bfc874c-cac2-4407-a6c2-16d4e4e8d29b",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/telecom"
            },
            "weight": -46,
            "relationships": {
                "field_image": Telecom
            }
        },
        {
            "title": "Company",
            "id": "d612d3cf-602b-4c3d-898c-fda58a927efe",
            "parent": null,
            "link": {
                "uri": "/company/about"
            },
            "weight": -46,
            "relationships": {
                "field_image": About
            }
        },
        {
            "title": "Quality engineering & testing",
            "id": "1bfe6f4b-a88c-412d-b6da-d43020495f2f",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/qa-testing"
            },
            "weight": -46,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "DevOps",
            "id": "a9dbfd8a-0e3e-42e7-b6aa-69e008120b5b",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/devops"
            },
            "weight": -46,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Software & hi-tech",
            "id": "0e528fed-bc4e-4b4c-9c4e-5de375daca2d",
            "parent": "menu_link_content:62b66566-94df-4e82-a8be-7e6ce971ebaa",
            "link": {
                "uri": "/hi-tech"
            },
            "weight": -45,
            "relationships": {
                "field_image": HiTech
            }
        },
        {
            "title": "AR & VR",
            "id": "304a8230-9888-494a-a3d5-0d9b5af615c1",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/services/augmented-virtual-reality"
            },
            "weight": -45,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Smart teams",
            "id": "d27b3724-e13f-43f3-a4a3-eba6cb4d9dc7",
            "parent": "menu_link_content:2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "link": {
                "uri": "/services/dedicated-development-centers"
            },
            "weight": -45,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Internet of things [IoT]",
            "id": "0b015e78-fdde-4d4d-a315-57d457d350a8",
            "parent": "menu_link_content:30153a86-4f11-4f27-9dbe-b49018df12ba",
            "link": {
                "uri": "/services/iot"
            },
            "weight": -44,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Engineering services",
            "id": "2d935cb2-e009-41b2-bfc8-ad16d8546e1e",
            "parent": "menu_link_content:48a00da0-366f-43a0-9d48-e23519ff9d5b",
            "link": {
                "uri": "/engineering-services"
            },
            "weight": 0,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Smart automation",
            "id": "30153a86-4f11-4f27-9dbe-b49018df12ba",
            "parent": "menu_link_content:48a00da0-366f-43a0-9d48-e23519ff9d5b",
            "link": {
                "uri": "/smart-automation"
            },
            "weight": 0,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Salesforce",
            "id": "a59d3208-917e-4623-8640-d58733c65320",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/salesforce"
            },
            "weight": 0,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Technology advisory",
            "id": "78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "parent": "menu_link_content:48a00da0-366f-43a0-9d48-e23519ff9d5b",
            "link": {
                "uri": "/technology-advisory"
            },
            "weight": 0,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Overview",
            "id": "f1664fe9-a3d5-4607-86c9-db2e06d21eec",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/about"
            },
            "weight": 0,
            "relationships": {
                "field_image": About
            }
        },
        {
            "title": "Approach",
            "id": "8e13ab66-0ea9-4254-8039-a7e54d68cfe4",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/approach"
            },
            "weight": 1,
            "relationships": {
                "field_image": Approach
            }
        },
        {
            "title": "Microsoft",
            "id": "dc364377-851d-41f9-bc80-0774d67d1850",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/microsoft"
            },
            "weight": 1,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "SAP Commerce",
            "id": "62c67191-c6c9-4919-a38f-3d6c65884e9e",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/sap-commerce"
            },
            "weight": 2,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Awards",
            "id": "9420bd89-843e-4c63-a148-8c4215fa4788",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/awards"
            },
            "weight": 2,
            "relationships": {
                "field_image": Awards
            }
        },
        {
            "title": "Careers",
            "id": "42c359e5-031f-4e9c-b3dd-20dad6262b3d",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/career"
            },
            "weight": 3,
            "relationships": {
                "field_image": Career
            }
        },
        {
            "title": "Odoo",
            "id": "07ea931c-00d2-4b20-9e9a-7b263298f644",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/erp/odoo"
            },
            "weight": 3,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Cloud",
            "id": "abbb126d-0c7b-46ab-a4d4-8d9bf1153add",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/cloud"
            },
            "weight": 4,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "News",
            "id": "9636fec3-3813-41d6-94f1-497ab2680a7e",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/news"
            },
            "weight": 4,
            "relationships": {
                "field_image": News
            }
        },
        {
            "title": "Blockchain",
            "id": "b1e5d6af-55e1-4a9f-bc4d-e0701b45b80b",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/blockchain"
            },
            "weight": 5,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Partnership",
            "id": "a6f1075c-3f2d-455b-bb89-12db73535a3e",
            "parent": "menu_link_content:d612d3cf-602b-4c3d-898c-fda58a927efe",
            "link": {
                "uri": "/company/partnership"
            },
            "weight": 5,
            "relationships": {
                "field_image": Partnership
            }
        },
        {
            "title": "Atlassian",
            "id": "e8f3f69d-5447-4d6d-ad63-8edc4b0777ba",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/atlassian"
            },
            "weight": 6,
            "relationships": {
                "field_image": null
            }
        },
        {
            "title": "Cyber security",
            "id": "a0699be1-3b97-4c9d-b575-55b284970a29",
            "parent": "menu_link_content:78e6ed9b-edf0-4237-8723-9820515e0dc7",
            "link": {
                "uri": "/services/cybersecurity"
            },
            "weight": 7,
            "relationships": {
                "field_image": null
            }
        }
    ],
colorScheme: 'primary'
};

