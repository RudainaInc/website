import * as React from 'react';

import { SelectFieldGroup } from '../../../../components';
import { TextAreaGroup } from '../../../../components';

const BenefactorInfo = (props: any) => {

    const onChange = props.onChange;
    const { values } = props

    return(
        <div>

            <SelectFieldGroup
                name="studentStatus"
                lable="Are you currently attending full-time school?"
                value={values.studentStatus}
                onChange={onChange}
                options={[
                    ["", "Please Select One"],
                    ["Yes", "Yes"],
                    ["No", "No"],
                    
                ]}
            />
            
            <SelectFieldGroup
                name="studentBirth"
                lable="Will you be attending full time school when the baby is born?"
                value={values.studentBirth}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["Yes", "Yes"],
                    ["No", "No"],
                    
                ]}
            />
            
            <SelectFieldGroup
                name="singleStatus"
                lable="Are you single? "
                value={values.singleStatus}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["Yes", "Yes"],
                    ["No", "No"],
                    
                ]}
            />
               
            
            <SelectFieldGroup
                name="residencyStatus"
                lable="What is your status in Canada?"
                value={values.residencyStatus}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["Canadian Citizen", "Canadian Citizen"],
                    ["Permanent Resident", "Permanent Resident"],
                    ["Refugee", "Refugee"],
                    ["Not Canadian", "Not Canadian"],
                    
                ]}
            />
            
            <SelectFieldGroup
                name="exerciseCount"
                lable="How many times do you ex every week?"
                value={values.exerciseCount}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["0", "0"],
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["8", "7"],
                    
                    
                ]}
            />
            
            <SelectFieldGroup
                name="dietaryRequirement"
                lable="Do you have any special dietary requirement (vegetarian, vegan, allergies)?"
                value={values.dietaryRequirement}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["Yes", "Yes"],
                    ["No", "No"],
                    
                ]}
                
            />
            
            <TextAreaGroup
                name="dietaryInfo"
                value={values.dietaryInfo}
                onChange={onChange}
                placeholder="If Yes, Please Specify"

            />

            
            <SelectFieldGroup
                name="smokeStatus"
                lable="Do you smoke?"
                value={values.smokeStatus}
                onChange={onChange}
                options={[
                    ["", "Select One"],
                    ["Yes", "Yes"],
                    ["No", "No"],
                    ["Occasionally", "Occasionally"],
                    
                ]}
            />

        </div>
    )
}


export default BenefactorInfo;