import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const ProjectModal = (project) => {
    return (
        <div class="modal fade" id={project.id} tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{project.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <img class="card-img-top" src={project.image} alt="Card image cap" />
                    <div class="modal-body">
                        {project.description}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;