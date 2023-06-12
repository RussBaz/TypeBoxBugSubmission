import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { Type, Static } from '@sinclair/typebox';

const schema = Type.Object({
    time: Type.Date()
});

const schemaOptional = Type.Object({
    time: Type.Optional(Type.Date())
});

type TestType = Static<typeof schema>;
type OptionalTestType = Static<typeof schemaOptional>;

const ajv = addFormats(new Ajv(), [
    'date-time',
    'time',
    'date',
    'email',
    'hostname',
    'ipv4',
    'ipv6',
    'uri',
    'uri-reference',
    'uuid',
    'uri-template',
    'json-pointer',
    'relative-json-pointer',
    'regex'
]);

const validate = ajv.compile<TestType>(schema);
const validateOptional = ajv.compile<OptionalTestType>(schemaOptional);

const dataToTest = {
    time: new Date()
};

if (!validate(dataToTest)) {
    throw Error(`Testing date field failed`);
}

const optionalDataToTest = {
    time: undefined
};

if (!validateOptional(optionalDataToTest)) {
    throw Error(`Testing optional date field failed - the time is undefined`);
}

if (!validateOptional(dataToTest)) {
    throw Error(`Testing date field failed - the time is defined`);
}

console.log('All tests have passed. Good job.');
