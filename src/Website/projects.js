import React from 'react'
import ProjectModal from "./modals.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const ProjectCard = (project) => {
    return (
        <div class="col-md-4">
            <div class="card mb-4 box-shadow" id="card_id">
                <img class="card-img-top" src={project.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{project.title}</h5>
                    <p class="card-text">{project.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal"
                                data-target={project.datatarget}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div>
            <section class="jumbotron text-center bg-light">
                <div class="container">
                    <h1 class="jumbotron-heading">PROJECTS</h1>
                </div>
            </section>
            <div class="album py-5 bg-light" id="Portfolio">
                <div class="container">
                    <div class="row" id="portfoliorow">
                        <ProjectCard title="The Aquamarine Conductor" image="/aquamarine.png" datatarget="#conductor" description="A spin-off story to Project Orchestra. Set years after the events of
                                Project Orchestra, the story follows the Aquamarine Conductor."  />
                        <ProjectCard title="Project Orchestra" image="/whitehair.png" datatarget="#project" description="The Fall, a catastrophe that spawned multiple structures of unknown
                                        origins, terrorizing the world with eldritch horrors."  />
                        <ProjectCard title="Fading Memories" image="/gaster.png" datatarget="#fadingmemories" description="A man who once lived, in a past long forgotten before Calamity marred
                                the land."  />
                    </div>
                </div>
            </div>
            <ProjectModal id="conductor" title="The Aquamarine Conductor" image="/aquamarine.png" description="A spin-off story to Project Orchestra. Set years after the events of
                    Project Orchestra, the story follows the Aquamarine Conductor, formerly known as King."/>
            <ProjectModal id="project" title="Project Orchestra" image="/whitehair.png" description="The Fall, a catastrophe that spawned multiple structures of unknown
                    origins, terrorizing the world with eldritch horrors and purging 80% of the world's
                    population."/>
            <ProjectModal id="fadingmemories" title="Fading Memories" image="/gaster.png" description="A man who once lived, in a past long forgotten before Calamity marred the land. A story set in the past in a time of peace before the great apocalypse, 
                    and the events that would lead to that Calamity and how humanity's final struggle fell apart and ended."/>
        </div>
    )
}

export default Projects;