class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }
    //display profile in ui
    showProfile(user) {
        this.profile.innerHTML = `
            <div class ="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class=img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}
                        </span>
                    
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}
                        </span>
                   
                        <span class="badge badge-success">Followers : ${user.followers}
                        </span>
                    
                        <span class="badge badge-info">Following : ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>

                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    //function alert message
    showAlert(message, className) {
        //clear any reamining alert
        this.clearAlert()
        //create div
        const div = document.createElement('div')
        // Add class
        div.className = className
        //Add text
        div.appendChild(document.createTextNode(message))
        //get parent
        const container = document.querySelector('.searchContainer')
        //get search box
        const search = document.querySelector('.search')
        //insert alert
        container.insertBefore(div, search)

        //timeout after 3 sec
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
        this.clearProfile()
    }

    //clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    //clear profile
    clearProfile() {
        this.profile.innerHTML = ''
    }

}