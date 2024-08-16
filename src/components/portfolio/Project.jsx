import PropTypes from 'prop-types';

function Project(props) {
    const projectName = props.projectName ?? 'Project Name';

    return (
        <div className='project'>
            <h3 className='text-xl'>{projectName}</h3>
            {props.children}
        </div>
    );
}

export default Project;

Project.propTypes = {
    children: PropTypes.node,
    projectName: PropTypes.string
}