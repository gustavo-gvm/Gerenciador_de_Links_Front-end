import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../../Layouts/Manage';
import { getFormData } from '../../../../helpers/form';
import { linkCreate } from '../../../../actions/LinkActions';

const Create = ({ link, linkCreate }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const data = getFormData(event);
    linkCreate(data);
  };

  if (link) {
    return <Redirect to="/manage/links" />;
  }

  console.log('*** Create.link', link);

  return (
    <Layout>
        <h1>Criar Link</h1>
        <div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Descrição</label>
              <input type="text" className="form-control" name="label" />
            </div>
            <div className="form-group">
              <label>Url</label>
              <input type="text" className="form-control" name="url" />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input type="checkbox" name="isSocial"/>
                <span className="form-check-sign"></span>
                É uma rede social?
              </label>
            </div>
            <div>
              <button className="btn btn-primary btn-round">Enviar</button>
            </div>
          </form>
        </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkCreate })(Create);