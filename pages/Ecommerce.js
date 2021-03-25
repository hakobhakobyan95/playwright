export class Ecommerce {

    constructor(page){
        this.page = page
    }

    async open(){
        await this.page.goto("http://automationpractice.com/")
    }

    async createAccount(data) {
        await this.page.click(".login")
        await this.page.fill("//input[@id='email_create']", data.email)
        await this.page.click("#SubmitCreate");
        await this.page.fill("#customer_firstname", data.username);
    }








    async signIn(email, password){
        await this.page.fill("//input[@id='email']", email)
        await this.page.fill("#passwd", password)

    }
    async search(name){
        await this.page.fill("#search_query_top", name)
        await this.page.click("[name=submit_search]")
    }
}