import gulp from 'gulp';
import scp from 'gulp-scp2';
import dotenv from 'dotenv';

const config = dotenv.config().parsed;
console.log("TCL: config", config)
const {NODE_ENV} = process.env;

const configKeyPrefix = `REACT_APP`;

function clean(cb) {
  console.log('TCL: clean -> clean');
  // body omitted
  cb();
}

function css(cb) {
  console.log('TCL: css -> css');
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function deployToServerTask() {
  const scpConfig = {
    host: config[`${configKeyPrefix}_SERVER_HOST`],
    dest: config[`${configKeyPrefix}_SERVER_DEST`],
    username: config[`${configKeyPrefix}_SERVER_USERNAME`],
    password: config[`${configKeyPrefix}_SERVER_PASSWORD`]
  };
  
  return gulp
    .src('build/**')
    .pipe(
      scp(scpConfig)
    );
}

function defaultTask(cb) {
  console.log('TCL: defaultTask -> defaultTask', 'done');
  cb();
}

export default defaultTask;

export const deploy = gulp.series(deployToServerTask);
