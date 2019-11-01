module.exports = srv => {
	const { Books } = srv.entities

	srv.after('READ', 'Authors', (authors, req) => {

		return authors.map(async author => {
			const publications = await cds.transaction(req).run(
				SELECT .from(Books) .where({ author_ID: author.ID })
			)
			author.numberOfBooks = publications.length

		})

	})

}
