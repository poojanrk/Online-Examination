// ai-anomaly-detection/anomalyDetection.js

const tf = require('@tensorflow/tfjs-node');
const modelPath = 'file://models/model.json';

const loadModel = async () => {
  return await tf.loadLayersModel(modelPath);
};

const detectAnomaly = async (data) => {
  const model = await loadModel();

  const input = tf.tensor2d([data], [1, data.length]);
  const prediction = model.predict(input).dataSync();

  const isAnomalous = prediction[0] > 0.5; // Example threshold
  return isAnomalous;
};

module.exports = detectAnomaly;
