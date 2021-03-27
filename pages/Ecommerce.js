import {URL} from './dataFiles'
import {ecommercePaths} from './ecommercePaths'
export class Ecommerce { 
    
    constructor(page){
        this.page = page
    }

    async open(){
        await this.page.goto(URL)
    }

    async createAccount(data) {
        await this.page.click(ecommercePaths.loginPath)
        await this.page.fill("//input[@id='email_create']", data.email)
        await this.page.click("#SubmitCreate");
        await this.page.fill("#customer_firstname", data.username);
        await this.page.fill("#customer_lastname", data.lastname)
    }

    async signIn(email, password){
        await this.page.click(ecommercePaths.loginPath)
        await this.page.fill(ecommercePaths.emailPath, email)
        await this.page.fill(ecommercePaths.passwordPath, password)
        await this.page.click(ecommercePaths.signInPath)

    }
    async search(name){
        await this.page.fill("#search_query_top", name)
        await this.page.click("[name=submit_search]")
    }
}