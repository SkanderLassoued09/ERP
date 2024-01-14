import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Profile } from "./profile.interface";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor() {}

  getUserByToken() {
    return gql`
      {
        getTokenData {
          role
          username
          email
        }
      }
    `;
  }

  signIn(username: string, password: string) {
    return gql`
      mutation {
        login(loginAuthInput: { username: "${username}", password: "${password}" }) {
          access_token
          user{ role  username email }
        }
      }
    `;
  }

  addProfile(addProfile: Profile) {
    return gql`
      mutation{createProfile(createProfileInput:{username:"${addProfile.username}",firstName:"${addProfile.firstName}",lastName:"${addProfile.lastName}",password:"${addProfile.password}",phone:"${addProfile.phone}",role:"${addProfile.role}",email:"${addProfile.email}"}){firstName}}
    `;
  }

  getListProfile() {
    return gql`
      {
        getAllProfiles {
          _id
          username
          firstName
          lastName
          phone
          role
          email
          createdAt
          updatedAt
        }
      }
    `;
  }

  updateProfile(_id: string, fName: string, lName: string, phone: string) {
    return gql`
      mutation {
        updateProfile(
          _id: "${_id}"
          updateProfileInput: {
            firstName: "${fName}"
            lastName: "${lName}"
            phone: "${phone}"
          }
        )
      }
    `;
  }
  deleteProfile(_id: string) {
    return gql`
      mutation {
        deleteProfile(_id: "${_id}")
      }
    `;
  }
}
