import {makeAutoObservable} from "mobx";

export class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(boolean) {
        this._isAuth = boolean
    }
    setUser(user) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get User() {
        return this._user
    }

}