import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <p>
      <strong>
        Módulo:{" "}
        {activeModule.title
          ? activeModule.title
          : "Nenhum módulo iniciado ainda"}
      </strong>
    </p>
    <p>
      <strong>
        Aula:{" "}
        {activeLesson.title
          ? activeLesson.title
          : "Nenhuma aula iniciada ainda"}
      </strong>
    </p>
  </div>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
