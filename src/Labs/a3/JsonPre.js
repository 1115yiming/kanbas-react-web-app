function JsonPre({ json }) {
    return (
        <pre>
      <code>{JSON.stringify(json, null)}</code>
    </pre>
    );
}

export default JsonPre;