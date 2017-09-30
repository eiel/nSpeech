import test from 'gulp';
import nSpeech from '../nSpeech';
import './lib/load_prototypes';

const speech = new nSpeech();

test('speech#convert should return "1 2 +" if the value "1 + 2" is passed', t => {
    t.true(speech.convert(["1", "+", "2"]).equals(["1", "2", "+"]));
});

test('speech#convert should return "1 2 -" if the value "1 - 2" is passed', t => {
    t.true(speech.convert(["1", "-", "2"]).equals(["1", "2", "-"]));
});
......