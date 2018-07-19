
interface IBenefactor {
    status: string,
    info: string
}

type Benefactor = IBenefactor;


interface IVolunteer {
    status: string,
    info: string
}

type Volunteer = IVolunteer;


interface IAdminState {
    benefactors: Benefactor[],
    volunteers: Volunteer[],
    loading: {
        benefactors: boolean,
        volunteers: boolean,
    }
}

type AdminState = IAdminState;


export { Benefactor, Volunteer, AdminState };