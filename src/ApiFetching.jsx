import React, { useState } from 'react'
const ApiFetching = () => {
    const [state,setState]=useState([])
    const mapData=Object.keys(data)
    const apiHeader = mapData[0];
    const apiBody = mapData[1];
    // const studentData=data?.body;
    // setState(studentData)
    console.log("===>",data[apiHeader]);


    
  return (
    <div className='main_container' >

        <div className='months_container'>

    {data[apiHeader]?.map((item,index)=>(
        <div className='months_container' key={index} >
            <p>{item?.day}</p>
            <p>{item.date}</p>
           </div> 
            ))
        }
        </div>

        <div className='student_name_container'>

    {
        data[mapData[1]]?.map((item,index) => (
            <div key={index}>
                <p>{item?.studentMap?.first_name} {item?.studentMap?.last_name}</p>
            </div>
        )
    )}
        </div>

        {/* {studentData.map((item,index)=>{
            // console.log("item===>",item);
            return(
                <div key={index}>
                <p>{`${item?.studentMap?.first_name} ${item?.studentMap?.last_name}`}</p>
                </div>
            )
        })} */}

        </div>
  )
}

export default ApiFetching

export const data={
    "headers": [
        {
            "day": "Fri",
            "date": 1
        },
        {
            "day": "Sat",
            "date": 2
        },
        {
            "day": "Sun",
            "date": 3
        },
        {
            "day": "Mon",
            "date": 4
        },
        {
            "day": "Tue",
            "date": 5
        },
        {
            "day": "Wed",
            "date": 6
        },
        {
            "day": "Thu",
            "date": 7
        },
        {
            "day": "Fri",
            "date": 8
        },
        {
            "day": "Sat",
            "date": 9
        },
        {
            "day": "Sun",
            "date": 10
        },
        {
            "day": "Mon",
            "date": 11
        },
        {
            "day": "Tue",
            "date": 12
        },
        {
            "day": "Wed",
            "date": 13
        },
        {
            "day": "Thu",
            "date": 14
        },
        {
            "day": "Fri",
            "date": 15
        },
        {
            "day": "Sat",
            "date": 16
        },
        {
            "day": "Sun",
            "date": 17
        },
        {
            "day": "Mon",
            "date": 18
        },
        {
            "day": "Tue",
            "date": 19
        },
        {
            "day": "Wed",
            "date": 20
        },
        {
            "day": "Thu",
            "date": 21
        },
        {
            "day": "Fri",
            "date": 22
        },
        {
            "day": "Sat",
            "date": 23
        },
        {
            "day": "Sun",
            "date": 24
        },
        {
            "day": "Mon",
            "date": 25
        },
        {
            "day": "Tue",
            "date": 26
        },
        {
            "day": "Wed",
            "date": 27
        },
        {
            "day": "Thu",
            "date": 28
        },
        {
            "day": "Fri",
            "date": 29
        },
        {
            "day": "Sat",
            "date": 30
        }
    ],
    "body": [
        {
            "id": 1,
            "class_id": 4,
            "section_id": 1,
            "studentMap": {
                "id": 16,
                "first_name": "Drew",
                "last_name": "Zorzenoni",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 3,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 3,
                "first_name": "Richart",
                "last_name": "Ollet",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 4,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 4,
                "first_name": "Leigh",
                "last_name": "Rollinshaw",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 5,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 5,
                "first_name": "Reeba",
                "last_name": "Quartly",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 6,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 6,
                "first_name": "Johnathan",
                "last_name": "Gascone",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 7,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 7,
                "first_name": "Natasha",
                "last_name": "Tomanek",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 8,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 8,
                "first_name": "Dionis",
                "last_name": "Eastment",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 9,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 9,
                "first_name": "Dora",
                "last_name": "Morse",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "A"
                    }
                ]
            }
        },
        {
            "id": 10,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 10,
                "first_name": "Westbrook",
                "last_name": "Strettell",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 11,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 11,
                "first_name": "Jobyna",
                "last_name": "Whatman",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 12,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 12,
                "first_name": "Ruprecht",
                "last_name": "Huckleby",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 13,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 13,
                "first_name": "Markus",
                "last_name": "Galley",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "A"
                    }
                ]
            }
        },
        {
            "id": 14,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 14,
                "first_name": "Helene",
                "last_name": "Maryet",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 15,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 15,
                "first_name": "Sayers",
                "last_name": "Turn",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 16,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 16,
                "first_name": "Drew",
                "last_name": "Zorzenoni",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 17,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 17,
                "first_name": "Gregg",
                "last_name": "Pavel",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 18,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 18,
                "first_name": "Hamish",
                "last_name": "Fudge",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 19,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 19,
                "first_name": "Missie",
                "last_name": "MacRannell",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 20,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 20,
                "first_name": "Peder",
                "last_name": "Di Franceshci",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "A"
                    }
                ]
            }
        },
        {
            "id": 21,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 21,
                "first_name": "Fifine",
                "last_name": "Blowick",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 22,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 22,
                "first_name": "Angil",
                "last_name": "Croney",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 23,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 23,
                "first_name": "Sybille",
                "last_name": "Mapledoram",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "L"
                    }
                ]
            }
        },
        {
            "id": 24,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 24,
                "first_name": "Billy",
                "last_name": "Dable",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 25,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 25,
                "first_name": "Elicia",
                "last_name": "Nevin",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 26,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 26,
                "first_name": "Francisco",
                "last_name": "Elleyne",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 27,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 27,
                "first_name": "Wanids",
                "last_name": "Elms",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": ""
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 28,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 28,
                "first_name": "Bobbye",
                "last_name": "Whyke",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "A"
                    }
                ]
            }
        },
        {
            "id": 29,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 29,
                "first_name": "Lilli",
                "last_name": "Whitby",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 30,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 30,
                "first_name": "Caspar",
                "last_name": "Huggan",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "A"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 31,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 31,
                "first_name": "Elinore",
                "last_name": "De Mitri",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "A"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 32,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 32,
                "first_name": "Rahul",
                "last_name": "Sharma",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 33,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 33,
                "first_name": "Amit",
                "last_name": "Sharma",
                "attendancesMap": [
                    {
                        "date": "2022-06-02T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "P"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 37,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 37,
                "first_name": "Rayyan",
                "last_name": "Mohammed",
                "attendancesMap": [
                    {
                        "date": "2022-06-08T00:00:00.000Z",
                        "status": "A"
                    },
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 109,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 109,
                "first_name": "Nagrjuna",
                "last_name": "Reddy",
                "attendancesMap": [
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 110,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 110,
                "first_name": "Prakash",
                "last_name": "Narayana",
                "attendancesMap": [
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 111,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 111,
                "first_name": "Haminder",
                "last_name": "Singh",
                "attendancesMap": [
                    {
                        "date": "2022-06-16T00:00:00.000Z",
                        "status": "P"
                    }
                ]
            }
        },
        {
            "id": 117,
            "class_id": 11,
            "section_id": 8,
            "studentMap": {
                "id": 117,
                "first_name": "Konda",
                "last_name": "Reddy",
                "attendancesMap": []
            }
        },
        {
            "id": 123,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 123,
                "first_name": "Abdul",
                "last_name": "Rehaman",
                "attendancesMap": []
            }
        },
        {
            "id": 124,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 124,
                "first_name": "Abdul",
                "last_name": "Saqib",
                "attendancesMap": []
            }
        },
        {
            "id": 139,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 139,
                "first_name": "Tom",
                "last_name": "Cruise",
                "attendancesMap": []
            }
        },
        {
            "id": 140,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 140,
                "first_name": "James",
                "last_name": "Bond",
                "attendancesMap": []
            }
        },
        {
            "id": 141,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 141,
                "first_name": "Angelina",
                "last_name": "Jolie",
                "attendancesMap": []
            }
        },
        {
            "id": 142,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 142,
                "first_name": "Priyanka",
                "last_name": "Chopra",
                "attendancesMap": []
            }
        },
        {
            "id": 143,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 143,
                "first_name": "Sharukh",
                "last_name": "Khan",
                "attendancesMap": []
            }
        },
        {
            "id": 144,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 144,
                "first_name": "Salman",
                "last_name": "Khan",
                "attendancesMap": []
            }
        },
        {
            "id": 145,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 145,
                "first_name": "Ajay",
                "last_name": "Devgun",
                "attendancesMap": []
            }
        },
        {
            "id": 427,
            "class_id": 2,
            "section_id": 3,
            "studentMap": {
                "id": 427,
                "first_name": "Syed",
                "last_name": "Uddin",
                "attendancesMap": []
            }
        },
        {
            "id": 494,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 494,
                "first_name": "Ryan",
                "last_name": "Moahmemed",
                "attendancesMap": []
            }
        },
        {
            "id": 1727,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 1727,
                "first_name": "Nagarjuna",
                "last_name": "Reddy",
                "attendancesMap": []
            }
        },
        {
            "id": 3054,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 3054,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3055,
            "class_id": 2,
            "section_id": 4,
            "studentMap": {
                "id": 3055,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3056,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 3056,
                "first_name": "Ragi",
                "last_name": "Ananth",
                "attendancesMap": []
            }
        },
        {
            "id": 3063,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 3063,
                "first_name": "Ragi",
                "last_name": "Ananth",
                "attendancesMap": []
            }
        },
        {
            "id": 3077,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3077,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3078,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3078,
                "first_name": "Ragi",
                "last_name": "Ananth",
                "attendancesMap": []
            }
        },
        {
            "id": 3079,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3079,
                "first_name": "Ragi",
                "last_name": "Ananth",
                "attendancesMap": []
            }
        },
        {
            "id": 3080,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3080,
                "first_name": "Anant",
                "last_name": "ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3081,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3081,
                "first_name": "Ragi",
                "last_name": "rer",
                "attendancesMap": []
            }
        },
        {
            "id": 3082,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3082,
                "first_name": "Anant",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3083,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3083,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3084,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3084,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3085,
            "class_id": 117,
            "section_id": 88,
            "studentMap": {
                "id": 3085,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3086,
            "class_id": 118,
            "section_id": 89,
            "studentMap": {
                "id": 3086,
                "first_name": "Ananth",
                "last_name": "Ragi",
                "attendancesMap": []
            }
        },
        {
            "id": 3102,
            "class_id": 120,
            "section_id": 99,
            "studentMap": {
                "id": 3102,
                "first_name": "Ragi",
                "last_name": "Chary",
                "attendancesMap": []
            }
        },
        {
            "id": 3147,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3147,
                "first_name": "PESARAVAI",
                "last_name": "VEERA NETHRA",
                "attendancesMap": []
            }
        },
        {
            "id": 3148,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3148,
                "first_name": "GIRI MAHATHI SRI",
                "last_name": "VYSHALI",
                "attendancesMap": []
            }
        },
        {
            "id": 3149,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3149,
                "first_name": "SHAIK",
                "last_name": "MIZANA MAHIN",
                "attendancesMap": []
            }
        },
        {
            "id": 3150,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3150,
                "first_name": "DUDEKULA",
                "last_name": "NIHARIKA",
                "attendancesMap": []
            }
        },
        {
            "id": 3151,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3151,
                "first_name": "DINDUKURTHI",
                "last_name": "PAVANA",
                "attendancesMap": []
            }
        },
        {
            "id": 3152,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3152,
                "first_name": "JANGAM",
                "last_name": "MOKSHA SRI",
                "attendancesMap": []
            }
        },
        {
            "id": 3153,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3153,
                "first_name": "KOPPARTHI",
                "last_name": "MOKSHITHA REDDY",
                "attendancesMap": []
            }
        },
        {
            "id": 3154,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3154,
                "first_name": "PIKKILI",
                "last_name": "CHAITRA VENKATESH",
                "attendancesMap": []
            }
        },
        {
            "id": 3155,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3155,
                "first_name": "VEERAM",
                "last_name": "MITHRA REDDY",
                "attendancesMap": []
            }
        },
        {
            "id": 3156,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3156,
                "first_name": "YETIPURI",
                "last_name": "NANDANA",
                "attendancesMap": []
            }
        },
        {
            "id": 3157,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3157,
                "first_name": "ASULA",
                "last_name": "NARASIMHA MANI SAI",
                "attendancesMap": []
            }
        },
        {
            "id": 3158,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3158,
                "first_name": "BOYINI",
                "last_name": "SHARATH KUMAR",
                "attendancesMap": []
            }
        },
        {
            "id": 3159,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3159,
                "first_name": "CHAKALI",
                "last_name": "MANVITH KUMAR",
                "attendancesMap": []
            }
        },
        {
            "id": 3160,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3160,
                "first_name": "PHELLA",
                "last_name": "VAMSI KRISHNA",
                "attendancesMap": []
            }
        },
        {
            "id": 3161,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3161,
                "first_name": "DHANIREDDY",
                "last_name": "MAHIDHAR REDDY",
                "attendancesMap": []
            }
        },
        {
            "id": 3162,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3162,
                "first_name": "DABBALA",
                "last_name": "MANVEER",
                "attendancesMap": []
            }
        },
        {
            "id": 3163,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3163,
                "first_name": "KONETI",
                "last_name": "AYAAN",
                "attendancesMap": []
            }
        },
        {
            "id": 3164,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3164,
                "first_name": "KALINGARI",
                "last_name": "CHAITANYA",
                "attendancesMap": []
            }
        },
        {
            "id": 3165,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3165,
                "first_name": "KEMAVATH",
                "last_name": "PREM NAIK",
                "attendancesMap": []
            }
        },
        {
            "id": 3166,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3166,
                "first_name": "MOOPURI",
                "last_name": "ANISH",
                "attendancesMap": []
            }
        },
        {
            "id": 3167,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3167,
                "first_name": "MAJJIGA",
                "last_name": "VENKATA THARUN",
                "attendancesMap": []
            }
        },
        {
            "id": 3168,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3168,
                "first_name": "POLUKA NAGA",
                "last_name": "TANISH GOWRAV",
                "attendancesMap": []
            }
        },
        {
            "id": 3169,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3169,
                "first_name": "SYED",
                "last_name": "MUHASIN",
                "attendancesMap": []
            }
        },
        {
            "id": 3170,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3170,
                "first_name": "SYED",
                "last_name": "RIYAN AHMED",
                "attendancesMap": []
            }
        },
        {
            "id": 3171,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3171,
                "first_name": "GOLA",
                "last_name": "SURJITH",
                "attendancesMap": []
            }
        },
        {
            "id": 3172,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3172,
                "first_name": "GANTLA",
                "last_name": "SHAYAN",
                "attendancesMap": []
            }
        },
        {
            "id": 3173,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3173,
                "first_name": "DUDEKULA",
                "last_name": "JAVEED",
                "attendancesMap": []
            }
        },
        {
            "id": 3174,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3174,
                "first_name": "KANAKABOINA",
                "last_name": "YASWITH KRISHNA KUMAR YADAV",
                "attendancesMap": []
            }
        },
        {
            "id": 3175,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3175,
                "first_name": "YANAMALA",
                "last_name": "ARAVINDA REDDY",
                "attendancesMap": []
            }
        },
        {
            "id": 3176,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3176,
                "first_name": "ANUPURA MOHAMMAD",
                "last_name": "AARIF",
                "attendancesMap": []
            }
        },
        {
            "id": 3177,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3177,
                "first_name": "YALLA",
                "last_name": "VIKHYATH RAO",
                "attendancesMap": []
            }
        },
        {
            "id": 3178,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3178,
                "first_name": "YEGGONI VENKATA",
                "last_name": "SAATHWIK CHOWDARY",
                "attendancesMap": []
            }
        },
        {
            "id": 3179,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3179,
                "first_name": "BUDAMKAYALA",
                "last_name": "KARTHIKEYA REDDY",
                "attendancesMap": []
            }
        },
        {
            "id": 3180,
            "class_id": 9,
            "section_id": 6,
            "studentMap": {
                "id": 3180,
                "first_name": "LOSARI",
                "last_name": "RAKESH",
                "attendancesMap": []
            }
        },
        {
            "id": 3181,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3181,
                "first_name": "Richart",
                "last_name": "Ollet",
                "attendancesMap": []
            }
        },
        {
            "id": 3182,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3182,
                "first_name": "Leigh",
                "last_name": "Rollinshaw",
                "attendancesMap": []
            }
        },
        {
            "id": 3183,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3183,
                "first_name": "Reeba",
                "last_name": "Quartly",
                "attendancesMap": []
            }
        },
        {
            "id": 3184,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3184,
                "first_name": "Johnathan",
                "last_name": "Gascone",
                "attendancesMap": []
            }
        },
        {
            "id": 3185,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3185,
                "first_name": "Natasha",
                "last_name": "Tomanek",
                "attendancesMap": []
            }
        },
        {
            "id": 3186,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3186,
                "first_name": "Dionis",
                "last_name": "Eastment",
                "attendancesMap": []
            }
        },
        {
            "id": 3187,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3187,
                "first_name": "Dora",
                "last_name": "Morse",
                "attendancesMap": []
            }
        },
        {
            "id": 3188,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3188,
                "first_name": "Westbrook",
                "last_name": "Strettell",
                "attendancesMap": []
            }
        },
        {
            "id": 3189,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3189,
                "first_name": "Jobyna",
                "last_name": "Whatman",
                "attendancesMap": []
            }
        },
        {
            "id": 3190,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3190,
                "first_name": "Ruprecht",
                "last_name": "Huckleby",
                "attendancesMap": []
            }
        },
        {
            "id": 3191,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3191,
                "first_name": "Markus",
                "last_name": "Galley",
                "attendancesMap": []
            }
        },
        {
            "id": 3192,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3192,
                "first_name": "Helene",
                "last_name": "Maryet",
                "attendancesMap": []
            }
        },
        {
            "id": 3193,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3193,
                "first_name": "Sayers",
                "last_name": "Turn",
                "attendancesMap": []
            }
        },
        {
            "id": 3194,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3194,
                "first_name": "Drew",
                "last_name": "Zorzenoni",
                "attendancesMap": []
            }
        },
        {
            "id": 3195,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3195,
                "first_name": "Gregg",
                "last_name": "Pavel",
                "attendancesMap": []
            }
        },
        {
            "id": 3196,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3196,
                "first_name": "Hamish",
                "last_name": "Fudge",
                "attendancesMap": []
            }
        },
        {
            "id": 3197,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3197,
                "first_name": "Missie",
                "last_name": "MacRannell",
                "attendancesMap": []
            }
        },
        {
            "id": 3198,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3198,
                "first_name": "Peder",
                "last_name": "Di Franceshci",
                "attendancesMap": []
            }
        },
        {
            "id": 3199,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3199,
                "first_name": "Fifine",
                "last_name": "Blowick",
                "attendancesMap": []
            }
        },
        {
            "id": 3200,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3200,
                "first_name": "Angil",
                "last_name": "Croney",
                "attendancesMap": []
            }
        },
        {
            "id": 3201,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3201,
                "first_name": "Sybille",
                "last_name": "Mapledoram",
                "attendancesMap": []
            }
        },
        {
            "id": 3202,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3202,
                "first_name": "Billy",
                "last_name": "Dable",
                "attendancesMap": []
            }
        },
        {
            "id": 3203,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3203,
                "first_name": "Elicia",
                "last_name": "Nevin",
                "attendancesMap": []
            }
        },
        {
            "id": 3204,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3204,
                "first_name": "Francisco",
                "last_name": "Elleyne",
                "attendancesMap": []
            }
        },
        {
            "id": 3205,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3205,
                "first_name": "Wanids",
                "last_name": "Elms",
                "attendancesMap": []
            }
        },
        {
            "id": 3206,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3206,
                "first_name": "Bobbye",
                "last_name": "Whyke",
                "attendancesMap": []
            }
        },
        {
            "id": 3207,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3207,
                "first_name": "Lilli",
                "last_name": "Whitby",
                "attendancesMap": []
            }
        },
        {
            "id": 3208,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3208,
                "first_name": "Caspar",
                "last_name": "Huggan",
                "attendancesMap": []
            }
        },
        {
            "id": 3209,
            "class_id": 11,
            "section_id": 10,
            "studentMap": {
                "id": 3209,
                "first_name": "Elinore",
                "last_name": "De Mitri",
                "attendancesMap": []
            }
        },
        {
            "id": 3216,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 3216,
                "first_name": "Megha",
                "last_name": "Gowda",
                "attendancesMap": []
            }
        },
        {
            "id": 4429,
            "class_id": 2,
            "section_id": 2,
            "studentMap": {
                "id": 4429,
                "first_name": "Nikhitha",
                "last_name": "Blue",
                "attendancesMap": []
            }
        }
    ]
}